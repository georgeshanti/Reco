# Reco

## Langauges
[![Generic badge](https://img.shields.io/badge/Electron-TypeScript-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/React-JavaScript-yellow.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/StyleSheet-Scss-pink.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Parser-C++-blue.svg)](https://shields.io/)
## Progress
  - XML Parser will read an XML and save to JSON file.
  - React App has been started.
  - Electron app has Class for the Office, and file system objects such as Directories and Files.
## To Do List
  - Read .odt file by decompressing and reading individual xml files and create correspodning objects to represent document file.
  - Add fields to Office to keep track of open files.
  - Add tools to Toolbar in Electron App.
 
Feel free to add any of these and send a pull request.

## Where to start
There are 3 components to this project.

### Electron App
[Electron App](https://github.com/electron/electron) written in typescript. Compiled to javascript and then run like any other electron app from `dist` directory.

#### File Structure

    .
    ├── dist                           # Compiled typescript files (javascript. Don't do anything here)
    ├── src                            # Source files (typescript. This is where the magic happens)
         ├── misc                      # Miscellaneous class (OfficeFile, OfficeDirectory, etc.)
         ├── office                    # Reco Office classes
         └── utils                     # Utilities
              ├── listeners            # Office Window Listeners
              └── functions            # Functions (getFolderContents, etc.)
    ├── package.json
    └── tsconfig.json                  # Typescript Configuration File

#### Run Development:
Run Electron App only after starting up React App on http://localhost:3000/

```
tsc
electron .
```

### React App

Built with [Create React App](https://github.com/facebook/create-react-app) and rewired to [React-App-Rewired](https://github.com/timarney/react-app-rewired).

#### File Structure:

    .
    ├── public                         # Public files including index.html
    ├── src                            # Source files
         ├── components                # All the react components
         ├── fonts                     # Fonts
         └── js                        # Redux
    ├── package.json
    └── tsconfig.json                  # Typescript Configuration File

Run Development:

```
npm run start
```

### Parsers

Parser built with C++, flex and bison. 

#### File Structure

    .
    ├── content.xml                    # Sample XML file.
    ├── driver.cpp                     # Takes an xml file as input and feeds it to the
                                         LALR parser generated from xml_tokens.l and xml_cfg.yacc
    ├── xml_token.l                    # Lexical Analyser to detect tags and strings.
    └── xml_cfg.yacc                   # YACC file that describes the grammar for an XML
                                         file. It also converts to JSON as it parses the file
#### Build:

```
make driver.out
./driver.out
```

It will produce a json file 'content.json' which is a json equivalent of the 'content.xml' file.