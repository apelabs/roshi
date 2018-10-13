import React, { Fragment } from 'react';
import * as Material from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const RoshiForm = ({ onSubmitHandler, formData, onChangeHandler }) => (
  <Fragment>
    <h1>{formData.text.header}</h1>
    <Material.FormControl component={'form'} onSubmit={onSubmitHandler} fullWidth margin="dense">
      <Material.FormControl component="fieldset">
        <Material.FormLabel component="legend">{formData.text.form}</Material.FormLabel>

        {/* Rendering the input fields */}
        {formData.inputsData.map(input => (
          <Material.TextField key={input.id} onChange={onChangeHandler} margin="dense" {...input} />
        ))}
      </Material.FormControl>

      <Material.Button variant="contained" color="primary" type="submit">
        {formData.text.button}
        <Icon style={{ marginLeft: 10 }}>send</Icon>
      </Material.Button>
    </Material.FormControl>
  </Fragment>
);

export default RoshiForm;
