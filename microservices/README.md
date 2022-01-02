

# Microservices

- Monalithic application can be broken down into small microservices
- each functionality becomes a microservice
- typical structure can contain a main application and related microservices
- service registry = this will need to be added in between the services to find out(to query the service registry)  where to find the the respective services in the infrastructure and to provide needed load balancing(randomly or round robin) , here the services registers itself to registry and know where to find the service registry which is provided via network layer and DNS
- communcation layer in the main application = this will provide resiliance against the outages and can be achieved by circuit breaking and caching
- queue = (ex: RabbitMQ) can be used to publish to microservices instead of posting data directly
- microservices concept follow the priciple that services can be created and taken down at any time
- there can be a no of instances running a specific service and each listening on different IP endpoint
- service discovery = we need a mechanism to keep track of the services to provide info to route requests to the specific services 
- istio = its a service mesh which provides the functionality of service discovery
- containers can run in a software defined network
- istio and envoy are used in kubernetes for the service discovery for contanierised applications and here basically we are using infrastructure layer to do the routing for us if this is not possible to use we make use of service registry which is an application level component 



## Scaling

- microservices = single scalable instances that handle tiny processes
- cloning = forking nodejs processes into multiple instances
- concept of grouping instances under main processes and creating resilient clusters
- scaling data layer using techniques like horizontal partitioning
- horizontal partitioning = spliting data between databases 
