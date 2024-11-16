import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { addCustom } from "@/redux/ResumeSlice";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
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
  const [value, setValue] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const customs = useAppSelector((state) => state.Resume.customs);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lastCustom = customs.length > 0 ? customs[customs.length - 1] : null;
    const id = lastCustom ? lastCustom.id + 1 : 1;
    if (value !== "") {
      dispatch(addCustom({ custom: value, id }));
    }
    navigate("/builder/RecreateCustom");
  };
  return (
    <EditorProvider>
      <form id="custom-form" onSubmit={handleSubmit}>
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
      </form>
    </EditorProvider>
  );
}
