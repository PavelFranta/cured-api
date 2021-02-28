import Model from '../models/model';

const loginModel = new Model('users');

export const loginPage = async (req, res) => {
  try {
    const data = await loginModel.select('id, email, password, role');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};