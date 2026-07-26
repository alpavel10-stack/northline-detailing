"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/site-data";

type FormFields = {
  name: string;
  phone: string;
  car: string;
  service: string;
  comment: string;
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  phone: "",
  car: "",
  service: "",
  comment: "",
  consent: false,
};

export function EstimateForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (fields.name.trim().length < 2) {
      nextErrors.name = "Укажите имя — минимум 2 символа.";
    }

    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      nextErrors.phone = "Укажите телефон минимум из 10 цифр.";
    }

    if (fields.car.trim().length < 2) {
      nextErrors.car = "Укажите марку и модель автомобиля.";
    }

    if (!fields.service) {
      nextErrors.service = "Выберите интересующую услугу.";
    }

    if (!fields.consent) {
      nextErrors.consent = "Подтвердите согласие для проверки формы.";
    }

    return nextErrors;
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstError = Object.keys(nextErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("success");
  };

  const setField = <Key extends keyof FormFields>(
    key: Key,
    value: FormFields[Key],
  ) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  };

  const describedBy = (field: keyof FormFields) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <form className="estimate-form" noValidate onSubmit={submit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            Имя <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            onChange={(event) => setField("name", event.target.value)}
          />
          {errors.name && (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Телефон <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 900 000-00-00"
            value={fields.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            onChange={(event) => setField("phone", event.target.value)}
          />
          {errors.phone && (
            <p className="field-error" id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="car">
            Марка и модель <span aria-hidden="true">*</span>
          </label>
          <input
            id="car"
            name="car"
            placeholder="Например, BMW X5"
            value={fields.car}
            aria-invalid={Boolean(errors.car)}
            aria-describedby={describedBy("car")}
            onChange={(event) => setField("car", event.target.value)}
          />
          {errors.car && (
            <p className="field-error" id="car-error">
              {errors.car}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="service">
            Услуга <span aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={fields.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            onChange={(event) => setField("service", event.target.value)}
          >
            <option value="">Выберите услугу</option>
            {services.map((service) => (
              <option value={service.title} key={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="field-error" id="service-error">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="comment">Комментарий</label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          placeholder="Опишите состояние автомобиля или желаемый результат"
          value={fields.comment}
          onChange={(event) => setField("comment", event.target.value)}
        />
      </div>

      <label className="consent" htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={fields.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={describedBy("consent")}
          onChange={(event) => setField("consent", event.target.checked)}
        />
        <span>
          Согласен на демонстрационную обработку введённых данных. Данные никуда
          не передаются.
        </span>
      </label>
      {errors.consent && (
        <p className="field-error consent-error" id="consent-error">
          {errors.consent}
        </p>
      )}

      <div className="form-submit">
        <button className="button" type="submit">
          Проверить расчёт
          <span aria-hidden="true">↘</span>
        </button>
        <p>
          Это учебный интерфейс. Серверная отправка и хранение данных не
          подключены.
        </p>
      </div>

      <p
        className="form-success"
        role="status"
        aria-live="polite"
        hidden={status !== "success"}
      >
        Поля заполнены корректно. Это демонстрационная форма: данные не были
        отправлены.
      </p>
    </form>
  );
}
