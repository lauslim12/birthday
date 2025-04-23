# Birthday

Congratulate someone on their birthday, mysteriously!

## Usage

Go to the link in this repository, and you should be able to access the generic page.

The real magic is located in the query parameters. You can supply these, all optional (with sane defaults):

### `name`

Name of the person, this would have to be encoded as Base64.

### `wishes`

Wishes to pass to the person, this would have to be encoded as Base64.

### `age`

Age of the person.

### `emoji`

Emoji to display as the main emoji, defaults to "🎉".

### `language`

Available options are `en`, `id`, `ja`, `kr,` and `cn`. New options are welcome!

### `theme`

Available options are `light`, `dark`, `rose`, `mint`, `slate`, `amber`, `purple`, `teal`, `midnight`, `forest`, `sunset`, `lavender`, `ocean`, `coffee`, `cherry`, `monochrome`. New options are welcome!

## Example

Example URL to use the parameters above is: `{application}?name=S2Fvcmk%3D&wishes=JUUzJTgxJThBJUU4JUFBJTk1JUU3JTk0JTlGJUU2JTk3JUE1JUUzJTgxJThBJUUzJTgyJTgxJUUzJTgxJUE3JUUzJTgxJUE4JUUzJTgxJTg2JUUzJTgxJTk0JUUzJTgxJTk2JUUzJTgxJTg0JUUzJTgxJUJFJUUzJTgxJTk5JUUzJTgwJTgyJUU0JUJCJThBJUU1JUI5JUI0JUUzJTgyJTgyJUUzJTgyJTg4JUUzJTgyJThEJUUzJTgxJTk3JUUzJTgxJThGJUUzJTgxJThBJUU5JUExJTk4JUUzJTgxJTg0JUUzJTgxJTk3JUUzJTgxJUJFJUUzJTgxJTk5JUUzJTgwJTgy&language=ja&theme=forest`.

This will render: `お誕生日おめでとう！`, `Kaori`, and `お誕生日おめでとうございます。今年もよろしくお願いします。` as formatted strings.

## Development

- Clone this repository.
- Install all dependencies with `pnpm install`.
- Run the development server with `pnpm dev`.
- To build the application, run `pnpm build`.

To make a PR, feel free to fork this repository and make a pull request! This codebase is checked with Biome, please run `pnpm lint` to ensure code checks pass before making a pull request.

## License

MIT License. Share with your friends and have fun!
