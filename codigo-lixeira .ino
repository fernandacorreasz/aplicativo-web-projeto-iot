#include <NewPing.h>
 
#define TRIGGER_PIN  12
#define ECHO_PIN     11
#define MAX_DISTANCE 200
 
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  delay(1000); // Espera 10 segundos
 
  int distance = sonar.ping_cm();
  // Calcula a porcentagem em relação à profundidade máxima da lixeira
  int trashPercentage = map(distance, 0, 21, 100, 0);
  // Garante que a porcentagem esteja no intervalo de 0 a 100
  trashPercentage = constrain(trashPercentage, 0, 100);
 
  // Exibe o resultado no monitor serial
  Serial.print("Distância: ");
  Serial.print(distance);
  Serial.print(" cm | Nível de lixo: ");
  Serial.print(trashPercentage);
  Serial.println("%");
 
  // Verifica se a lixeira está cheia (100%)
  if (trashPercentage == 1000) {
    Serial.println("ALERTA: A lixeira está cheia!");
    // Adicione aqui o código para alertar o usuário, como enviar uma mensagem ou acionar um alarme.
  }
}
