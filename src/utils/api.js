export const submitContactForm = async (formData) => {
  const payload = {
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

    subject: `New Consultation Request - ${formData.service}`,

    from_name: "BlueAnt Finserv",

    name: formData.name,

    email: formData.email,

    phone: formData.phone,

    city: formData.city,

    service: formData.service,

    message: `
New Consultation Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Service: ${formData.service}
    `,

    replyto: formData.email,
  };

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();

  console.log(result);

  if (!result.success) {
    throw new Error(result.message);
  }

  return result;
};
