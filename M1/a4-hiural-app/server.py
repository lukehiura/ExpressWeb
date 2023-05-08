import grpc
from concurrent import futures
import message_pb2
import message_pb2_grpc

class MessageService(message_pb2_grpc.MessageServiceServicer):
    def SendMessage(self, request, context):
        response = message_pb2.Message()
        response.text = "Received message: " + request.text
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    message_pb2_grpc.add_MessageServiceServicer_to_server(MessageService(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Server started, listening on port 50051...")
    server.wait_for_termination()

if __name__ == "__main__":
    serve()