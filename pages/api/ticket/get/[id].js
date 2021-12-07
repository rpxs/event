//nextjs api route that takes a ticket id in req.query and returns the ticket with that id
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default async function handler(req, res) {
  const { id } = req.query;
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found!" });
  }
  return res.json(ticket);
}
