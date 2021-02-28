import Model from '../models/model';

const loginModel = new Model('users');

export const loginPage = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await loginModel.select('id, email, password, role', `WHERE email='${email}' AND password='${password}'`);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};