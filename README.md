Deployed with [Zeit](https://zeit.co), developed with [hugo](https://gohugo.io), theme a [fork of temple](https://github.com/ikottman/temple).

To test run:
```
now
```

to deploy to ikottman.com:
```
now --prod
```

## local development

```
hugo new posts/title.md
hugo server -D
```

to run the API locally:
* modify the package.json to install the [mac os version of hugo](https://github.com/gohugoio/hugo/releases)
* run the API: `now dev`

## secrets
[zeit secrets](https://zeit.co/docs/now-cli#commands/secrets)

| key | env variable | description |
|-----|-----| ------ |
| faunadb-secret | FAUNADB_SECRET | unique ID that let's us contact the spell-cards Fauna DB | 