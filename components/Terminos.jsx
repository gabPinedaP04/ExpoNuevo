import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Terminos = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Términos y Condiciones de la Aplicación de Votación</Text>

      <Text style={styles.sectionHeader}>1. Introducción</Text>
      <Text style={styles.text}>
        Bienvenido a nuestra aplicación de votación de candidatos presidenciales. Al utilizar esta aplicación, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con estos términos, por favor no utilice la aplicación.
      </Text>

      <Text style={styles.sectionHeader}>2. Elegibilidad</Text>
      <Text style={styles.text}>
        Para utilizar esta aplicación, debe ser mayor de 18 años y ser ciudadano del país en el que se están llevando a cabo las elecciones.
      </Text>

      <Text style={styles.sectionHeader}>3. Uso de la Aplicación</Text>
      <Text style={styles.text}>
        - La aplicación está diseñada para facilitar la votación de manera segura y eficiente.{'\n'}
        - Está prohibido manipular o intentar alterar los resultados de la votación de cualquier manera.{'\n'}
        - No debe utilizar la aplicación para ningún propósito ilegal o no autorizado.
      </Text>

      <Text style={styles.sectionHeader}>4. Privacidad</Text>
      <Text style={styles.text}>
        - Recopilamos información personal para verificar su identidad y garantizar la integridad del proceso de votación.{'\n'}
        - Su información será tratada con confidencialidad y no será compartida con terceros sin su consentimiento, excepto cuando sea requerido por la ley.
      </Text>

      <Text style={styles.sectionHeader}>5. Seguridad</Text>
      <Text style={styles.text}>
        - Implementamos medidas de seguridad para proteger sus datos personales y garantizar la seguridad del proceso de votación.{'\n'}
        - Usted es responsable de mantener la confidencialidad de su información de inicio de sesión.
      </Text>

      <Text style={styles.sectionHeader}>6. Propiedad Intelectual</Text>
      <Text style={styles.text}>
        - Todo el contenido y la funcionalidad de la aplicación son propiedad de [Nombre de la Empresa] y están protegidos por leyes de derechos de autor y otras leyes de propiedad intelectual.
      </Text>

      <Text style={styles.sectionHeader}>7. Modificaciones</Text>
      <Text style={styles.text}>
        - Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en la aplicación.
      </Text>

      <Text style={styles.sectionHeader}>8. Limitación de Responsabilidad</Text>
      <Text style={styles.text}>
        - No seremos responsables por cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de la aplicación.
      </Text>

      <Text style={styles.sectionHeader}>9. Ley Aplicable</Text>
      <Text style={styles.text}>
        - Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del [País].
      </Text>

      <Text style={styles.sectionHeader}>10. Contacto</Text>
      <Text style={styles.text}>
        - Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, por favor contáctenos a través de [Correo Electrónico de Contacto].
      </Text>

      <Text style={styles.footer}>Gracias por utilizar nuestra aplicación de votación.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default Terminos;
