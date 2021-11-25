const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//nextjs api route that creates a new ticket in the database by checking if an identical email is present, and if not, adding an email with prisma
export default async function handler(req, res) {
  const { email } = req.body;
  const ticket = await prisma.ticket.findUnique({
    where: {
      email: email,
    },
  });
  if (ticket) {
    return res.status(400).json({ error: "Email is already registered!" });
  } else {
    const newTicket = await prisma.ticket.create({
      data: {
        email: email,
      },
    });
    return res.json(newTicket);
  }
}
