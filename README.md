My personal website and CV http://atif.work/

## Website Build

```
yarn next build; yarn next export -o "./docs/";
```

## PDF Build

```
yarn next build; yarn next export -o "./docs/";
npx serve -p 3000
node .\scripts\makepdf.js
```
