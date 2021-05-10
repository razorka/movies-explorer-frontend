import React from "react";

import InputField from '../InputField/InputField';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import SubmitButton from "../SubmitButton/SubmitButton";

function SearchForm() {

  const [values, setValues] = React.useState({});

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = React.useCallback(
    (newValues = {}) => {
      setValues(newValues);
    },
    [setValues]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  const SEARCH_FORM_STYLE_SETTINGS = {
    form: 'search-form',
    textInput: 'search-form__text-input',
    submitButton: 'search-form__submit-button',
    checkboxInput: 'search-form__checkbox-input',
    checkboxLabel: 'search-form__checkbox-label',
    checkboxSlider: 'search-form__checkbox-slider',
    checkboxOnFocus: 'search-form__checkbox-label_focus'
  };

  const SEARCH_TEXT_INPUT_SETTINGS = {
    type: 'text',
    id: 'search-text',
    ariaLabel: 'поиск фильма',
    placeholder: 'Фильм',
    name: 'search',
    minLength: 1,
    maxLength: 30,
  };

  const SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS = {
    type: 'checkbox',
    id: 'filter-shortfilm',
    label: 'Короткометражки',
    name: 'shortfilm',
    required: false,
  };

  const SUBMIT_BUTTON_SETTINGS = {
    className: '',
    type: 'submit',
    title: 'Поиск',
  };

  return (
    <form
      className={SEARCH_FORM_STYLE_SETTINGS.form}
      onSubmit={handleSubmit}
    >
      <InputField
        settings={SEARCH_TEXT_INPUT_SETTINGS}
        className={SEARCH_FORM_STYLE_SETTINGS.textInput}
        onChange={handleChange}
        value={values.search}
        required={values.shortfilm ? false : true}
      />
      <FilterCheckbox
        inputClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxInput}
        labelClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxLabel}
        sliderClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxSlider}
        onFocusClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxOnFocus}
        settings={SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS}
        onChange={handleChange}
        value={values.shortfilm}
      />
      <SubmitButton
        className={SEARCH_FORM_STYLE_SETTINGS.submitButton}
        settings={SUBMIT_BUTTON_SETTINGS}
        disabled={!values.search && !values.shortfilm && true}
      />
    </form>
  )
}

export default SearchForm;
