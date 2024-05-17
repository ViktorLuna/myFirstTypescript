### create a tsconfig 
```
tsc --init
```

### tsconfig.json
```
"rootDir": "./src",
"outDir": "./public", 
```

### run
```
tsc
```
### to watch all of the files
```
tsc -w
```
### prevent from compiling outside src folder
add to the last part of the tsconfig
```
},
  "include": ["src"]
```