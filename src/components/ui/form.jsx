import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "../../lib/utils";
import { Label } from "../../components/ui/label";

const Form = FormProvider;

// ---------------- Context ----------------
const FormFieldContext = React.createContext({});
const FormItemContext = React.createContext({});

// ---------------- FormField ----------------
const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// ---------------- Hook ----------------
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext || !fieldContext.name) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// ---------------- FormItem ----------------
const FormItem = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...rest} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

// ---------------- FormLabel ----------------
const FormLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...rest}
    />
  );
});
FormLabel.displayName = "FormLabel";

// ---------------- FormControl ----------------
const FormControl = React.forwardRef((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? formDescriptionId
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// ---------------- FormDescription ----------------
const FormDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
});
FormDescription.displayName = "FormDescription";

// ---------------- FormMessage ----------------
const FormMessage = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props;
  const { error, formMessageId } = useFormField();

  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...rest}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

// ---------------- Exports ----------------
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};