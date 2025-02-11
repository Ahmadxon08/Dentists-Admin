import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Ism kamida 2 ta harf bo‘lishi kerak")
    .max(30, "Ism 30 ta harfdan oshmasligi kerak")
    .required("Ism majburiy"),
  lastName: yup
    .string()
    .min(2, "Familiya kamida 2 ta harf bo‘lishi kerak")
    .max(30, "Familiya 30 ta harfdan oshmasligi kerak")
    .required("Familiya majburiy"),
  address: yup
    .string()
    .min(5, "Manzil kamida 5 ta belgi bo‘lishi kerak")
    .required("Manzil majburiy"),
  description: yup
    .string()
    .min(5, "Izoh kamida 5 ta harf bo‘lishi kerak")
    .required("Izoh majburiy"),
  price: yup
    .number()
    .min(1000, "Narxi kamida 1000 sum  bo‘lishi kerak")
    .required("Narxi majburiy"),
  birthDate: yup
    .date()
    .max(new Date(), "Tug‘ilgan sana kelajak bo‘lishi mumkin emas")
    .required("Tug‘ilgan sana majburiy"),
  appointmentDate: yup
    .date()
    .min(new Date(), "Qabul sanasi o'tmishda bo‘lishi mumkin emas")
    .required("Qabul sanasi majburiy"),
  appointmentTime: yup.string().required("Qabul vaqti majburiy"),
  doctor: yup.string().required("Shifokor majburiy"),
});
