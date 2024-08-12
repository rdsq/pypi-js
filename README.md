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

`all` method returns all packages in the PyPI registry as a list of strings. It
is often more efficient to use the `iterate` method

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

## Stats

`stats` is a method for getting stats of the PyPI registry. Has only two fields:
`top_packages` and `total_packages_size`

```ts
import * as pypi from '@rdsq/pypi';

const stats = await pypi.stats();

console.log('Total packages size in bytes:', stats.total_packages_size);

const top1 = Object.keys(stats.top_packages)[0];

console.log('Top 1 package:', top1);
console.log('Its size:', stats.top_packages[top1].size);
```

## Types

This package also features two types:

- `PypiPackage` for the `getPackage` method
- `PypiStats` for the `stats` method
