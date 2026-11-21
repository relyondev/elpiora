#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
state_file="$script_dir/hostinger-state.json"
json_value() {
  node -e 'const s=require(process.argv[1]); process.stdout.write(String(s[process.argv[2]] ?? ""))' "$state_file" "$1"
}
env_value() { printenv "$1" 2>/dev/null || true; }
resolve() {
  local value
  value="$(env_value "$1")"
  [ -n "$value" ] || value="$(json_value "$2")"
  printf '%s' "${value:-${3:-}}"
}

host="$(resolve ELPIORA_SSH_HOST host)"
username="$(resolve ELPIORA_SSH_USERNAME username)"
port="$(resolve ELPIORA_SSH_PORT port 22)"
project_root="$(resolve ELPIORA_SSH_PROJECT_ROOT projectRoot)"
repo_url="$(resolve ELPIORA_SSH_REPO_URL repoUrl)"
repo_ref="$(resolve ELPIORA_SSH_REPO_REF repoRef)"
identity_file="$(resolve ELPIORA_SSH_IDENTITY_FILE identityFile "$HOME/.ssh/id_ed25519")"
[[ "$project_root" == /* && "$project_root" != / ]] || { echo 'projectRoot must be an absolute repository path' >&2; exit 1; }
[[ "$port" =~ ^[0-9]+$ ]] && ((port > 0 && port < 65536)) || { echo 'Invalid SSH port' >&2; exit 1; }
[[ -n "$host" && "$host" != -* && -n "$username" && "$username" != -* ]] || { echo 'Missing or invalid SSH target' >&2; exit 1; }

ssh_opts=(-p "$port" -o BatchMode=yes -o StrictHostKeyChecking=yes -o ConnectTimeout=15)
if [ -n "$identity_file" ]; then
  [ -r "$identity_file" ] || { echo "SSH key is not readable: $identity_file" >&2; exit 1; }
  ssh_opts+=(-i "$identity_file" -o IdentitiesOnly=yes)
fi

# Keep the shared primary checkout intact; Orca creates the workspace's linked worktree.
remote_sync='set -euo pipefail
export GIT_TERMINAL_PROMPT=0
for tool in git node npm gh codex orca-ide; do
  command -v "$tool" >/dev/null || { echo "Missing VPS CLI: $tool" >&2; exit 1; }
done
gh auth status >/dev/null 2>&1 || { echo "Run gh auth login on the VPS" >&2; exit 1; }
codex login status >&2 || { echo "Run codex login --device-auth on the VPS" >&2; exit 1; }
if [ ! -e "$project_root" ]; then
  mkdir -p "$(dirname "$project_root")"
  git clone --branch "$repo_ref" -- "$repo_url" "$project_root"
fi
git -C "$project_root" rev-parse --show-toplevel >/dev/null
[ "$(git -C "$project_root" remote get-url origin)" = "$repo_url" ] || { echo "Unexpected origin at projectRoot" >&2; exit 1; }
git -C "$project_root" fetch origin "$repo_ref"
'
ssh "${ssh_opts[@]}" "$username@$host" "$(printf 'project_root=%q repo_url=%q repo_ref=%q bash -lc %q' "$project_root" "$repo_url" "$repo_ref" "$remote_sync")" >&2

node -e 'const [host,port,username,identityFile,projectRoot]=process.argv.slice(1);
console.log(JSON.stringify({schemaVersion:1,connection:{type:"ssh",projectRoot,target:{label:"Hostinger VPS",host,port:Number(port),username,identityFile,identitiesOnly:true}}}))' \
  "$host" "$port" "$username" "$identity_file" "$project_root"
