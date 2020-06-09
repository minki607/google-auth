import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

  inputRoot: {
      backgroundColor: "#f2f2f2",
        marginBottom: '20px',
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
      }
    }
  }));

const MultipleLanguageInput = ({input, meta: {touched, error, submitFailed}}) => {
  
    const language = [
        {title: "KOREAN" , code:'ko'}, 
        {title: "JAPANESE" , code: 'jp'}, 
        {title: "CHINESE" , code: 'cn'}
    ]


const classes = useStyles()

    const { onChange } = input;
    return (
      <div>
        <Autocomplete
        
          multiple
          classes={classes}
          limitTags={2}
          value={input.value || []}
          id="multiple-limit-tags"
          options={language}
          onChange={(e, newValue) => {
            onChange(newValue);
          }}
          getOptionLabel={option => option.title}
          getOptionSelected={(option, value) => option.title === value.title}
          renderInput={(params) => (
            <TextField 
            {...params}
             variant="outlined" 
             placeholder="Translatable Language(s)" 
             fullWidth/>
          )}
        />
      </div>
    );
  }
  export default MultipleLanguageInput