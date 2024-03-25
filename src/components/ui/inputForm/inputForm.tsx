import { useTranslations } from "next-intl";
import { Path, UseFormRegister } from "react-hook-form";
import Style from './inputForm.module.css';

interface IInputForm {
  placeholder?: string,
  value?: string,
  onChange?: (value: string) => void;
  className?: string
  type: string
}

type InputProps = {
  label: Path<any>
  register: UseFormRegister<any>
  required: string
  className: string
  type: string
}

export const Input = ({ label, register, required, className, type = 'text' }: InputProps) => {
  const t = useTranslations('Admin');

  console.log("register", (register(label, { required })))


  if (type === 'boolean')
    return (
      <div className={`${Style[className]}`}>
        <input
          id={`checkbox-{label}`}
          type="checkbox"
          className={Style.InputCheckBox}
          {...register(label, {
            required,
          })}
          autoFocus={true} />

        <label
          className={Style.labelCheckBox}
          htmlFor={`checkbox-{label}`} >
          {`${t(`Input.${label}`)}`}
        </label>
      </div>)

  return (
    <>
      <div className={`${Style[className]}`} >
        <input
          type={type}
          className={Style.Input}
          placeholder={`${t(`Input.${label}`)}...`}
          {...register(label, { required })}
          autoFocus={false} />
      </div >
    </>
  )
}

function InputForm(props: IInputForm) {
  const t = useTranslations('Admin');
  return (
    <div className={`${Style[props.className!]}`}>
      <input
        className={Style.Input}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder ? (`${t(`Input.${props.placeholder}`)}...`) : ''}
        onChange={() => props.onChange} />
    </div>
  )
}

export default InputForm