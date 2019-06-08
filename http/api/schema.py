from marshmallow import Schema, fields, pprint

class User(Schema):
    id = fields.Str(required=True)
    phone = fields.Str(required=True)
    name = fields.Str()
    sex = fields.Str()
    age = fields.Int()
    disability = fields.Boolean(required=True)
    

class Positions(Schema):
    id = fields.Str(required=True)
    device_id = fields.Int(required=True)
    servertime = fields.DateTime()
    fixtime = fields.DateTime()
    lat = fields.Float()
    lng = fields.Float()
    tc_speed = fields.Float()
    tc_attr = fields.Dict()


