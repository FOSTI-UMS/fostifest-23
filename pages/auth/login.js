import FormLogin from "@/components/elements/login/formLogin";

export default function Login() {
  return <FormLogin href="/auth/register" title="Login" changePage="Belum punya akun?" submit="Login" />;
}