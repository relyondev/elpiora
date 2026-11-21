# Hostinger SSH environment

`hostinger-ssh` connects to the existing Hostinger VPS using SSH key authentication.
Orca owns each workspace's linked Git worktree. The shared primary checkout is
`/srv/orca/elpiora`; create clones it if absent and fetches without resetting it.
The recipe does not provision a new VPS, start an Orca server, open a public app
port, or stop the existing VPS.

## Desktop prerequisites

- Node.js, Git and SSH on PATH.
- Verify the VPS host key through the Hostinger console before recording it in
  `~/.ssh/known_hosts`. Unknown or changed keys fail closed.
- An authorized SSH key, defaulting to `~/.ssh/id_ed25519`.

Non-secret defaults live in `hostinger-state.json`. Override them with
`ELPIORA_SSH_HOST`, `ELPIORA_SSH_USERNAME`, `ELPIORA_SSH_PORT`,
`ELPIORA_SSH_IDENTITY_FILE`, `ELPIORA_SSH_PROJECT_ROOT`, `ELPIORA_SSH_REPO_URL`, or
`ELPIORA_SSH_REPO_REF`. The key path is resolved on the desktop; the key itself
never enters the recipe result or repository. The SSH agent socket is allowed
locally, but agent forwarding is not enabled.

## VPS prerequisites

Install Git, Node.js 22 with npm, GitHub CLI, Codex, and the Linux Orca CLI
(`orca-ide`). Install build tools for native npm dependencies. Run the following
interactively on the VPS with your own accounts:

```bash
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git
codex login --device-auth
```

Credentials belong to the tools' own authentication stores on the VPS. Do not
copy desktop credential directories, forward tokens over SSH commands, or put
secrets in this repository. A rebuilt VPS needs authentication again.

## Validation

From the desktop repository:

```bash
orca vm recipe doctor hostinger-ssh --json
# Ask before the live test, as required by the environment skill:
orca vm recipe doctor hostinger-ssh --provision --json
```

From the environment's checkout:

```bash
orca-ide vm env doctor --path "$PWD" --run-setup --json
```

Setup installs locked dependencies with `npm ci`, runs ESLint and TypeScript,
and builds Next.js. It can be rerun. It does not create an `.env` file. Google
Fonts used by the app require outbound network access during the build.
Start the app with `npm run dev -- --hostname 127.0.0.1`. Use an SSH tunnel to
preview it, for example `ssh -L 3000:127.0.0.1:3000 root@187.127.220.68`.

The static doctor's `recipe.destroy` warning is accepted deliberately:
`destroy: none` preserves this pre-existing, shared VPS and primary checkout.
Orca disconnects its SSH relay and manages its worktrees; this recipe allocates
no cloud resource to remove. Suspend and resume hooks are omitted for the same
reason. Do not power off the VPS when sleeping or deleting a workspace.

The composer reads recipes from the primary checkout. The doctor can validate
this branch, but the “Run on” picker needs `orca.yaml` merged into the primary
branch. Each workspace shares the host user, installed tools, and authentication;
this recipe provides separate worktrees, not a security sandbox.
