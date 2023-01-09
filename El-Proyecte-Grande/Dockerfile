# Build and run commands:
# docker build -t robodog -f Dockerfile1.dockerfile .
# docker run --name robodog-app --rm -dp 8888:8080 robodog


FROM openjdk:18.0.1 AS server
WORKDIR /app
COPY ./target/El-Proyecte-Grande-0.0.1-SNAPSHOT.jar ./El-Proyecte-Grande-0.0.1-SNAPSHOT.jar
EXPOSE 8888
ENTRYPOINT ["java", "-jar", "El-Proyecte-Grande-0.0.1-SNAPSHOT.jar"]