# GitHub-Explorer

Application that helps to get a list of users and display their profile information, exploiting the GitHub public API Rest.

## How to install

1. Clone the project on your computer:

```bash
$ git clone https://github.com/enriqueMontano/github-explorer.git
```

2. Install necessary libraries:

```bash
$ cd github-explorer
$ npm i
```

## How to run the application

On the project root directory

```bash
$ npm start
```

## API rate limiting

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

The returned HTTP headers of any API request show your current rate limit status:

```
$ curl -i https://api.github.com/users/octocat
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

For more information about this, you can consult the [official documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#rate-limit).

## Technologies

Project is created with:

- React: v16.13.1
- Redux: v4.0.5
- Styled-components: v5.2.0
