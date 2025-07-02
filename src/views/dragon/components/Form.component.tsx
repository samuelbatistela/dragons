/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import styled from 'styled-components';
import validationSchema from './schema';
import Input from '@/components/input/Input.component';
import { Title as SharedTitle } from '@/components/typography/Typography.component';
import FormCard from '@/components/card/FormCard.component';
import SharedButton from '@/components/button/Button.component';
import { FormValues } from '../Dragon.view';
import { SkeletonLoading } from '@/components/skeleton/SkeletonLoading.component';

const Wrapper = styled(FormCard)`
  width: 100%;
  max-width: 415px;

  margin: 0 auto;
`;

const Title = styled(SharedTitle)`
  margin: 0;
  margin-bottom: 12px;
`;

const Button = styled(SharedButton).attrs(() => ({ block: true }))`
  margin-top: 20px;
`;

const WrapperLoading = styled.div`
  margin: 16px 0px;
`;

interface DragonFormProps {
  isLoadingSubmit: boolean;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void;
  initialData?: FormValues;
  isLoading: boolean;
}

const DragonForm: FC<DragonFormProps> = ({
  isLoadingSubmit,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const submitForm = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    onSubmit(values, formikHelpers);
  };

  const initialValues: FormValues = initialData || { name: '', type: '' };

  return (
    <Wrapper>
      {isLoading ? (
        <WrapperLoading>
          <SkeletonLoading lines={1} height={150} />
          <br />
          <SkeletonLoading lines={1} height={38} />
        </WrapperLoading>
      ) : (
        <>
          <Title>{initialData ? 'Editar Dragão' : 'Novo Dragão'}</Title>
          <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
            enableReinitialize
          >
            {({ errors, touched }: FormikProps<FormValues>) => (
              <Form noValidate>
                <Field name="name">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      label="Digite o nome"
                      errorText={touched.name && errors.name ? errors.name : ''}
                      error={touched.name && Boolean(errors.name)}
                      type="text"
                      autoComplete="off"
                    />
                  )}
                </Field>

                <Field name="type">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      label="Digite o tipo"
                      errorText={touched.type && errors.type ? errors.type : ''}
                      error={touched.type && Boolean(errors.type)}
                      type="text"
                      autoComplete="off"
                    />
                  )}
                </Field>
                <Button
                  type="submit"
                  disabled={isLoadingSubmit}
                  isLoading={isLoadingSubmit}
                >
                  {initialData ? 'Atualizar' : 'Salvar'}
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Wrapper>
  );
};

export default DragonForm;
