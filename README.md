# Jest Runner Groups Test Repository

This repository serves as a testing ground for the [jest-runner-groups](https://www.npmjs.com/package/jest-runner-groups) package, a tool for running Jest tests organized into groups.

## Overview

The repository contains a collection of simple Node.js code snippets accompanied by corresponding Jest tests. These tests are designed to be executed using the jest-runner-groups tool. By annotating tests with specific group names using the `@group` tag, you can easily execute tests within different environments or categories.

## Running Tests with GitHub Actions

This repository is integrated with GitHub Actions to automate the testing process. The workflow configuration file (`.github/workflows/main.yml`) is set up to run Jest tests using the jest-runner-groups tool. Specifically, it filters tests based on group annotations to ensure targeted testing.

### Workflow Details

The workflow configuration specifies two jobs, each targeting different test groups and hypothetic environments:

- **Jest**: This job runs on the `ubuntu-latest` environment and executes Jest tests filtered by the `bcn` group.
- **JestUbuntu**: This job runs on the `ubuntu-20.04` environment and executes Jest tests filtered by the `azure` group.
