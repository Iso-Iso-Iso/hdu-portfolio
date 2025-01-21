"use client";
import React, { ChangeEvent, useState } from "react";
import Section from "@/components/Section/Section";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button, Form, Input, Textarea } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setIsInvalid(true);
      return;
    }

    toast("Your form has been sent!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInvalid(false);
  };

  return (
    <Section id="contact-me">
      <Toaster />

      <SectionTitle title="Contact Me" subtitle="Feel free to talk 🥺" />
      <Form>
        <div className="flex flex-col gap-6 w-full">
          <Input
            label="Email*"
            required
            type="email"
            size="sm"
            value={email}
            onChange={handleInput}
            errorMessage="Please enter a valid email"
            isInvalid={isInvalid}
          />
          <Textarea
            className="w-full h-52"
            label="Topic"
            classNames={{ inputWrapper: "!h-full" }}
          />
        </div>
        <Button color="warning" variant="flat" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Section>
  );
};

export default ContactMe;
