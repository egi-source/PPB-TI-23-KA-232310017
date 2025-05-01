import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f0ff", 
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c3e50", 
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#5d6d7e", 
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#4a6fa5",
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#bdd7f0",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f4f8ff",
    fontSize: 14,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#7aaaff", 
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  signUpButton: {
    marginTop: 16,
  },
  signUpText: {
    color: "#7aaaff",
    fontSize: 14,
  },
});
