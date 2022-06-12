import riak
import sys


def delete_record(client, bucket_name, key):
    try:
        bucket = client.bucket(bucket_name)
        record = bucket.get(key)
        record.delete()
        print("key: {0} deleted succesfully".format(key))
    except:
        print(sys.exc_info()[0])


def read_record(client, bucket_name, key):

    try:
        bucket = client.bucket(bucket_name)
        record = bucket.get(key)

        if(record.encoded_data==None):
            print("key: {} not found in bucket: {}".format(key,bucket_name))
        else:
            print(record.encoded_data.decode("utf-8"))

    except:
        print(sys.exc_info()[0])

def update_record(client, bucket_name, key, value_to_change, value):

    try:
        bucket = client.bucket(bucket_name)
        record = bucket.get(key)
        record.data[value_to_change] = value
        record.store()
        print("key: {0} updated succesfully".format(key))
    except:
        print(sys.exc_info()[0])

def store_record(client, bucket_name, key, data):
    
    try:
        bucket = client.bucket(bucket_name)
        record = bucket.new(key,data)
        record.store()
        print("key: {0} stored succesfully".format(key))
    except:
        print(sys.exc_info()[0])


def main():

    document = {
        'type':'dog',
        'name':'layla',
        'age' : '3',
        'id'  : '18110'
    }
    client = riak.RiakClient(pb_port=8087)
    bucket_name = 's18110'
    
    store_record(client, bucket_name, document['id'], document)
    read_record(client, bucket_name,document['id'])
    update_record(client, bucket_name, document['id'], 'age', '10')
    read_record(client, bucket_name,document['id'])
    delete_record(client, bucket_name, document['id'])
    read_record(client, bucket_name,document['id'])

if __name__=="__main__":
    main()