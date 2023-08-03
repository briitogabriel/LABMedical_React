import * as Yup from 'yup';

const RegisterAppointmentSchema = Yup.object().shape({
  reason: Yup.string()
    .min(6, 'O motivo da consulta deve ter no mínimo 6 caracteres')
    .max(60, 'O motivo da consulta deve ter no máximo 60 caracteres')
    .required('Motivo da consulta é obrigatório'),
  appointmentDate: Yup.date().required('Data da consulta é obrigatória'),
  appointmentHour: Yup.string().required('Horário da consulta é obrigatório'),
  description: Yup.string()
    .min(15, 'A descrição do problema deve ter no mínimo 15 caracteres')
    .max(1000, 'A descrição do problema deve ter no máximo 1000 caracteres')
    .required('Descrição do problema é obrigatória'),
  precautions: Yup.string()
    .min(15, 'A dosagem e precauções devem ter no mínimo 15 caracteres')
    .max(250, 'A dosagem e precauções devem ter no máximo 250 caracteres')
    .required('Dosagem e precauções são obrigatórias'),
});

export default RegisterAppointmentSchema;
