# PyPI JS Package

This is an API wrapper for the [PyPI API](https://warehouse.pypa.io/index.html)

## Iterate

`iterate` is a method to iterate all packages in the PyPI registry

```ts
import * as pypi from '@rdsq/pypi';

for (const packageName of await pypi.iterate()) {
    console.log(packageName); // a lot
}
```

## All

`all` method returns all packages in the PyPI registry as a list of strings. It is often more efficient to use the `iterate` method

```ts
import * as pypi from '@rdsq/pypi';

const packages = await pypi.all();

console.log(packages[0]);
// should be "0"
```

## Get Package

`getPackage` is a method to get data about any package in the PyPI registry

```ts
import * as pypi from '@rdsq/pypi';

console.log(await pypi.getPackage('django'));
```
