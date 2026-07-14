"use client";

import React, { FormEvent } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Calendar,
  DateField,
  DatePicker,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FiFileText, FiDollarSign, FiImage } from "react-icons/fi";

interface AddItemInputs {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  date: string;
  imageUrl?: string;
}

const AddItemPage = () => {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  };

  const inputStyle = `rounded-xl border border-slate-200 bg-white text-slate-900 w-full shadow-none mt-1 focus:border-[#4f46e5] focus:ring-0 focus:outline-none transition-colors autofill:shadow-[0_0_0_30px_#ffffff_inset] [-webkit-text-fill-color:slate-900]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 px-4 md:px-0 text-slate-900 min-h-screen flex items-center justify-center bg-slate-50">
        <Form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white shadow-xl flex border border-slate-200/60 p-8 w-full max-w-2xl mx-auto flex-col gap-5"
        >
          <header className="text-center mb-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Add New <span className="text-[#4f46e5]">Item</span>
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill in the details below to add a premium travel item to NexusDash.
            </p>
          </header>

          <TextField isRequired name="title" type="text" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Title
            </Label>
            <div className="relative flex items-center">
              <Input
                className={`${inputStyle} `}
                placeholder="e.g., Luxury Beach Resort Package"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired name="shortDescription" type="text" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Short Description 
            </Label>
            <div className="relative flex items-center">
              <FiFileText className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input
                className={`${inputStyle} pl-10`}
                placeholder="Brief summary of the item"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired name="fullDescription" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Full Description
            </Label>
            <TextArea
              name="fullDescription"
              className={`${inputStyle} min-h-25 p-3 border border-slate-200 rounded-xl mt-1`}
              placeholder="Provide a detailed description of the item..."
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
            {/* Price Field */}
            <TextField isRequired name="price" type="number" className="w-full">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
                Price (USD) 
              </Label>
              <div className="relative flex items-center">
                <FiDollarSign className="absolute left-3.5 text-slate-400 z-20" size={18} />
                <Input
                  className={`${inputStyle} pl-10`}
                  placeholder="299"
                />
              </div>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Date Field - Exact HeroUI Component Anatomy */}
            <div className="w-full flex flex-col">
              <DatePicker isRequired name="date">
                <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide mb-1 block">
                  Relevant Date
                </Label>
                <DateField.Group className="flex items-center rounded-xl border border-slate-200 bg-white h-10 px-3 shadow-none mt-1 focus-within:border-[#4f46e5] transition-colors">
                  <DateField.Input className="flex-1 flex gap-0.5 text-slate-900 text-sm">
                    {(segment) => (
                      <DateField.Segment 
                        segment={segment} 
                        className="px-0.5 focus:bg-[#4f46e5] focus:text-white rounded outline-none select-none data-[placeholder=true]:text-slate-400" 
                      />
                    )}
                  </DateField.Input>
                  <DateField.Suffix>
                    <DatePicker.Trigger className="text-slate-400 hover:text-slate-600 focus:outline-none p-1">
                      <DatePicker.TriggerIndicator />
                    </DatePicker.Trigger>
                  </DateField.Suffix>
                </DateField.Group>

                <DatePicker.Popover className="bg-white border border-slate-200 shadow-xl rounded-2xl p-4 mt-2">
                  <Calendar aria-label="Choose date" className="text-slate-900">
                    <Calendar.Header className="flex items-center justify-between mb-4">
                      <Calendar.YearPickerTrigger className="flex items-center gap-1 font-bold text-sm text-slate-800 hover:bg-slate-100 px-2 py-1 rounded-lg">
                        <Calendar.YearPickerTriggerHeading />
                        <Calendar.YearPickerTriggerIndicator />
                      </Calendar.YearPickerTrigger>
                      <div className="flex gap-1">
                        <Calendar.NavButton slot="previous" className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600" />
                        <Calendar.NavButton slot="next" className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600" />
                      </div>
                    </Calendar.Header>
                    <Calendar.Grid className="w-full border-collapse">
                      <Calendar.GridHeader className="text-slate-400 text-xs font-semibold">
                        {(day) => (
                          <Calendar.HeaderCell className="pb-2 text-center w-8">
                            {day}
                          </Calendar.HeaderCell>
                        )}
                      </Calendar.GridHeader>
                      <Calendar.GridBody>
                        {(date) => (
                          <Calendar.Cell 
                            date={date} 
                            className="w-8 h-8 text-sm text-center align-middle hover:bg-slate-100 rounded-lg cursor-pointer data-[selected=true]:bg-[#4f46e5] data-[selected=true]:text-white outline-none"
                          />
                        )}
                      </Calendar.GridBody>
                    </Calendar.Grid>
                  </Calendar>
                </DatePicker.Popover>
              </DatePicker>
            </div>
          </div>

          {/* Optional Image URL Field */}
          <TextField name="image" type="file" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide">
              Destination Image 
            </Label>
            <div className="relative flex items-center">
              <FiImage className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input
                className={`${inputStyle} pl-10 `}
                placeholder="https..."
              />
            </div>
            <Description className="text-xs text-slate-400 mt-1">
              Provide a valid link to an online image asset.
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Submit Button */}
          <div className="mt-4">
            <Button
              type="submit"
              className="cursor-pointer w-full rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-6 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Add Item
            </Button>
          </div>
        </Form>
      </div>
    </motion.div>
  );
};

export default AddItemPage;