package wick.manager2.wickmanager2.authorizationUser.controller.dto;
import lombok.Data;
import java.time.Instant;
import java.util.List;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import wick.manager2.wickmanager2.authorizationUser.model.Authority;

@Data
public class IncludeResponse {
    private String id;
    private byte[] termoFile;
    private byte[] fotoPerfil;
    private String username;
    private String nome;
    private String sobrenome;
    private String emailAddress;
    private String password;
    private String activityStatus;
    private String group;
    private String curso;

    
    private Instant creationDate;
    private Instant lastChanceDate;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public byte[] getTermoFile() {
        return termoFile;
    }
    public void setTermoFile(byte[] termoFile) {
        this.termoFile = termoFile;
    }
    public byte[] getFotoPerfil() {
        return fotoPerfil;
    }
    public void setFotoPerfil(byte[] fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getSobrenome() {
        return sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
    public String getEmailAddress() {
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getActivityStatus() {
        return activityStatus;
    }
    public void setActivityStatus(String activityStatus) {
        this.activityStatus = activityStatus;
    }
    public String getGroup() {
        return group;
    }
    public void setGroup(String group) {
        this.group = group;
    }
    public String getCurso() {
        return curso;
    }
    public void setCurso(String curso) {
        this.curso = curso;
    }
    public Instant getCreationDate() {
        return creationDate;
    }
    public void setCreationDate(Instant creationDate) {
        this.creationDate = creationDate;
    }
    public Instant getLastChanceDate() {
        return lastChanceDate;
    }
    public void setLastChanceDate(Instant lastChanceDate) {
        this.lastChanceDate = lastChanceDate;
    }

   
}
