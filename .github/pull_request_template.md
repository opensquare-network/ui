## PR title format

If this PR needed to release a new version, the PR title format following below:

- `feat: xxxxx`: minor version
- `fix: xxxxx`: patch version
- Otherwise will not trigger the CI release job

For example: `feat(card): support ghost`.

Read https://semantic-release.gitbook.io/semantic-release/#commit-message-format for more details.

To skip CI (GitHub action), add `skip-ci` to commit message. To skip release, add `skip-release` to commit message.
