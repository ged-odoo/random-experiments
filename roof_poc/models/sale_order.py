
from odoo import fields, models


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    bom_calculator_data = fields.Json(string='BOM Calculator')
