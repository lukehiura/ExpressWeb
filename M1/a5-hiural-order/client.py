import grpcio
import message_pb2
import message_pb2_grpc

def run():
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = message_pb2_grpc.MessageServiceStub(channel)
        request = message_pb2.Message()
        request.text = "A message from CS361"
        response = stub.SendMessage(request)
        print("Received response:", response.text)

if __name__ == "__main__":
    run()