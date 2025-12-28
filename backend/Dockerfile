# Build Stage
FROM amazoncorretto:17-alpine-jdk AS build
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Run Stage
FROM amazoncorretto:17-alpine-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
COPY users.db users.db
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
