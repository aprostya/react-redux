import React from 'react'
import { FieldArray, Field, reduxForm } from 'redux-form';
import Button from '../MainContent/ButtonAdd';
import styled from 'styled-components';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";
import normalizeNumbers from './normilizeNumbers';
import normalizeISBN from './normilizeISBN';
import normalizeString from './normilizeString';

momentLocalizer(moment)

const required = value => value ? undefined : 'Поле обязательно для заполнения'
const maxLength = max => value =>
  value && value.length > max ? `Вводить не более ${max} символов` : undefined
const maxLength30 = maxLength(30)
const maxLength20 = maxLength(20)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Введите минимум ${min} страниц, но не более 10000` : undefined
const minLengthYear = min => value =>
    value && value < min ? `Не раньше ${min} года` : undefined
const minValue1 = minValue(1)
const isbn = value => 
  // value && /[\d]{3}-[\d]{1}-[\d]{2}-[\d]{6}-[\d]{1}/.test(value) ? 'Wrong isbn' : undefined
  value && /[\d]{3}-[\d]{1}-[\d]{2}-[\d]{6}-[\d]{1}/.test(value) ? undefined : 'Неверный ISBN'
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const pages = value => value && value > 10000 ? 'Не более 10.000 страниц' : undefined
  
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined
const errorAdd = value => value.length < 5  ? "Error": undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="author-container">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} className="field-input" type={type}/>
      {touched && ((error && <AlertField>{error}</AlertField>) || (warning && <AlertField>{warning}</AlertField>))}
    </div>
  </div>
)
const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    min={new Date(1800, 0, 1)}
    value={!value ? null : new Date(value)}
  />
const ButtonAuthor = styled(Button)`
  font-size: 10px;
  margin-left: 0;
  border-color: #000;
  color: #000;
  :hover {
        color: #fff;
        background-color: #000;
        border-color: #000;
    }
    ::before, ::after {
        border-color: #000;      
    }
    ::after {
        bottom: -6px;
        right: -6px;
        left: auto;
        top: auto;
        transform: rotate(180deg);
    }
`
const ButtonsPopupFooter = styled(ButtonAuthor) `
    font-size: 14px;
    margin-right: 56px;
`

const AlertField = styled.span `
  color: red;
  font-size: 7px;
`

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

// const FileUpload = (props) => {
//     const { handleSubmit } = props;
//     const onFormSubmit = (data) => {
//         console.log(data);
//     }
//     return (
//           <form onSubmit={handleSubmit(onFormSubmit)}>
//             <div>
//               <label>Attachment</label>
//               <Field name="attachment" component={FileInput} type="file"/>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//     )
// }



const addUpToFive = (fields) => {
  if (fields.length <= 5)
    fields.push({});
}

const renderAuthors = ({ fields, meta: { touched, error, submitFailed}}) => (
<FieldArray name="hello" component={hobbies =>
  <ul>
    <div>
      <label>Авторы</label>
      <li>
        <ButtonAuthor className="button-add" type="button" onClick={() => addUpToFive(fields)}>Добавить автора</ButtonAuthor>      
      </li>
    </div>  
    {fields.map((author, index) => (
      <li key={index}>
        {/* <h4 className="author-title">Автор #{index + 1}</h4> */}
        <div className="fields-container">
          <Field
            name={`${author}.firstName`}
            type="text"
            component={renderField}
            label="Имя"
            validate={[ required, maxLength20 ]}
            normalize={normalizeString}
          />
          <Field
            name={`${author}.lastName`}
            type="text"
            component={renderField}
            label="Фамилия"
            validate={[ required, maxLength20 ]}
            normalize={normalizeString}
          />
        </div>
        <button
          type="button"
          title="Remove author"
          className="remove-button"
          onClick={() => fields.remove(index)}
        >Удалить</button>        
      </li>
    ))}
    {hobbies.error && <li className="error">{hobbies.error}</li>}
  </ul>
}/>
);


const FieldLevelValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  let authors = [{}];
  return (
    <form onSubmit={handleSubmit}>
     <Field name="book_name" type="text"
        component={renderField} label="Название книги"
        validate={[ required, maxLength30 ]}
        normalize={normalizeString}
      />
      <FieldArray name="authors" component={renderAuthors}/>
      <Field name="page_count" type="number"
        component={renderField} label="Количество страниц"
        validate={[number, minValue1 ]}
        normalize={normalizeNumbers}
        warn={pages}
      />
       <Field name="publisher_name" type="text"
        component={renderField} label="Название издательства"
        validate={[maxLength30 ]}
      />
       <Field name="year" type="number"
        component={renderField} label="Год публикации"
        validate={[minLengthYear(1800)]}
        normalize={normalizeNumbers}
        warn={minLengthYear(1800)}
      />
     <div className="author-container">
        <label>Дата выхода в тираж</label>
        <Field
          name="date"
          showTime={false}
          component={renderDateTimePicker}
        />
    </div>
    <Field name="isbn" type="text"
        component={renderField} label="ISBN"
        validate={isbn}
        // warn={isbn}
        normalize={normalizeISBN}
      />
    {/* <FileUpload/>   */}
      <div>
        <ButtonsPopupFooter type="submit" disabled={submitting}>Сохранить</ButtonsPopupFooter>
        <ButtonsPopupFooter type="button" disabled={pristine || submitting} onClick={reset}>Отмена</ButtonsPopupFooter>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  initialValues: {authors: [{}]}
})(FieldLevelValidationForm)