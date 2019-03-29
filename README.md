# @indlekofer/media

reducer for media related changes.

## export functions

### inject

inject will be called at startup without force and creates the store reducer.
accepts one argument force (default true)

### remove

remove the reducer for cleanup methods and testing

### handleChange

action with two arguments (key and value), no dispatch is needed

### handleChangeAll

action with one argument (object of key values), no dispatch is needed

## export constants

### REDUCER

the actual injected reducers name

### TYPE_CHANGE

dispatched action type for handleChange

### TYPE_CHANGE_ALL

dispatched action type for handleChangeAll
