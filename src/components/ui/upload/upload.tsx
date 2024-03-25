'use client';
import UploadIcon from '@/shared/assets/icon/upload.svg';
import { useEffect, useState } from 'react';
import Style from "./upload.module.css";

interface IUploadForm {
  files: File[];
  setFiles: (filse: File[]) => void
}

function UploadForm({ files, setFiles }: IUploadForm) {
  const [filesURL, setFilesURL] = useState<string[]>([]);
  const [drag, setDrag] = useState<boolean>(false)

  useEffect(() => {
    if (files.length < 1) return;
    const newFilesURL = new Array;
    files.forEach(file => newFilesURL.push(URL.createObjectURL(file)));
    setFilesURL(newFilesURL);
  }, [files])

  function onFileChange(e: any) {
    setFiles([...e.target.files]);
  }
  function dragStartHandler(e: React.FormEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDrag(true);
  }
  function dragLeaveHandler(e: React.FormEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDrag(false);
  }
  function onDropHandler(e: any) {
    e.preventDefault();
    setFiles([...e.dataTransfer.files]);
    setDrag(false)
  }
  function UploadFormContent() {
    if (files.length > 0)
      return (<img src={filesURL[0]} className={Style.ImageUploadFile} />)

    return (
      <div className={`${Style.UploadContent} ${drag && Style.DragText} `}>
        {
          drag
            ? <h3>Отпустите файлы, чтоб загрузить их</h3>
            : <h3>Преретащите изображение или нажмите чтоб выбрать</h3>
        }
        <UploadIcon className={`${Style.UploadIcon} ${drag && Style.DragIcon} `} />
      </div>
    )
  }
  return (
    <label htmlFor="fileUpload"
      className={`${Style.UploadFile} ${drag && Style.Drag}`}
      onDragStart={e => dragStartHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragOver={e => dragStartHandler(e)}
      onDrop={e => onDropHandler(e)}
    >

      <input id="fileUpload" type="file"
        multiple accept='image/*'
        onChange={onFileChange}
        className={Style.InputUploadFile} />
      <UploadFormContent />
    </label>
  )
}
export default UploadForm