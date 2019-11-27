from flask_restplus import Resource

from v1 import api


ns = api.namespace(
    'healthcheck', description='Operations related to updates')


@ns.route('/')
class Healthcheck(Resource):

    def get(self):
        return 'WORKING', 200
