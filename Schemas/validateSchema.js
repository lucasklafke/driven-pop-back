export default function validateSchema(req, schema) {
  const validation = schema.validate(req.body);

  if (validation.error) {
    console.log(validation.error.details);
    return false;
  } else {
    return true;
  }
}
