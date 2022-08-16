## Commit message format

If this PR needed to release a new version, the **commit message format** following below:

- `feat: xxxxx`: will release minor version
- `fix: xxxxx`: will release patch version
- Otherwise will not trigger the CI release job

Commit message format example: `feat(card): support ghost`.

And then merge this PR via **Square merge**.

Read https://semantic-release.gitbook.io/semantic-release/#commit-message-format for more details.

To skip CI (GitHub action), add `skip-ci` to commit message. To skip release, add `skip-release` to commit message.
