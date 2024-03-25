import { getTypeByKey } from "@/shared/configs/getTypes";
import React from "react";
import { Input } from "../inputForm/inputForm";
import Style from './InputFields.module.css';


const InputFields: React.FC<{ attributes: string[], register: any }> = ({ attributes, register }) => (
  <section className={Style.SectionPage}>
    {attributes.map((item, index) => (
      <React.Fragment key={`input-Form-${index}`}>
        <Input
          type={getTypeByKey(item)}
          className="inputForm"
          required={item}
          register={register}
          label={item} />
      </React.Fragment>
    ))}
  </section>
);


export default InputFields