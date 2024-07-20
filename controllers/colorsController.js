const express = require("express");
const colors = express.Router();
const {
  getAllColors,
  getColor,
  createColor,
  deleteColor,
  updateColor,
} = require("../queries/color");
const { checkName, checkBoolean } = require("../validations/checkColors");

// Index
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// Show
colors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const color = await getColor(id);
  if (color) {
    res.json(color);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// Create
colors.post("/", checkName, checkBoolean, async (req, res) => {
  const color = await createColor(req.body);
  res.json(color);
});

// Delete
colors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedColor = await deleteColor(id);
  if (deletedColor.id) {
    res.status(200).json(deletedColor);
  } else {
    res.status(404).json("Color not found");
  }
});

// Update
colors.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColor = await updateColor(id, req.body);
    res.status(200).json(updatedColor);
  } catch (error) {
    res.status(404).json({ error: `No color with the id ${id} exists` });
  }
});

module.exports = colors;
