import { useState, ChangeEvent } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Toolbar,
  Separator,
} from "react-simple-wysiwyg";

export default function TxtEditor() {
  const [value, setValue] = useState<string>();

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  console.log(value);

  return (
    <EditorProvider>
      <Editor
        value={value}
        onChange={onChange}
        className="h-[233px] dark:text-white "
      >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}
