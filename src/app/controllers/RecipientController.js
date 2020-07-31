import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address_street: Yup.string().required(),
      address_number: Yup.string().required(),
      address_complement: Yup.string(),
      address_state: Yup.string().required(),
      address_city: Yup.string().required(),
      address_cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation failed' });

    const {
      name,
      address_street,
      address_number,
      address_complement,
      address_state,
      address_city,
      address_cep,
    } = req.body;

    const alreadyExists = await Recipient.findOne({ where: { name } });
    if (alreadyExists) return res.json({ message: 'Recipient already exists' });

    const recipient = await Recipient.create({
      name,
      address_street,
      address_number,
      address_complement,
      address_state,
      address_city,
      address_cep,
    });

    return res.json(recipient);
  }
}

export default new RecipientController();
