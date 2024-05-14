'use client';

import Image from "next/image";
import Link from 'next/link';

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">
            Bem-vindo de volta! Faça login na sua conta.
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Logue ou crie uma conta para acessar seu painel de controle.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="grid w-full grow items-center px-4 sm:justify-center">
            <ClerkLoaded>
            <SignIn.Root path="/sign-in">
              <Clerk.Loading>
                {(isGlobalLoading) => (
                  <>
                    <SignIn.Step name="start">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Faça login no FinanceX</CardTitle>
                          <CardDescription>Bem-vindo de volta! Por favor, insira seus dados para continuar.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <div className="grid grid-cols-2 gap-x-4">
                            <Clerk.Connection name="github" asChild>
                              <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                                <Clerk.Loading scope="provider:github">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Icons.spinner className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Icons.gitHub className="mr-2 size-4" />
                                        GitHub
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                            <Clerk.Connection name="google" asChild>
                              <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                                <Clerk.Loading scope="provider:google">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Icons.spinner className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Icons.google className="mr-2 size-4" />
                                        Google
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                          </div>
                          <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                            ou
                          </p>
                          <Clerk.Field name="identifier" className="space-y-2">
                            <Clerk.Label asChild>
                              <Label>Endereço de e-mail</Label>
                            </Clerk.Label>
                            <Clerk.Input type="email" required asChild>
                              <Input />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action submit asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignIn.Action>

                            <Button variant="link" size="sm" asChild>
                              <Link href="/sign-up">Não tem uma conta? Cadastre-se</Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Step>

                    <SignIn.Step name="choose-strategy">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Use outro método</CardTitle>
                          <CardDescription>Enfrentando problemas? Você pode usar qualquer um desses métodos para fazer login.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <SignIn.SupportedStrategy name="email_code" asChild>
                            <Button variant="link" disabled={isGlobalLoading}>
                              Código de e-mail
                            </Button>
                          </SignIn.SupportedStrategy>
                          <SignIn.SupportedStrategy name="password" asChild>
                            <Button variant="link" disabled={isGlobalLoading}>
                              Senha
                            </Button>
                          </SignIn.SupportedStrategy>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action navigate="previous" asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Voltar';
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignIn.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Step>

                    <SignIn.Step name="verifications">
                      <SignIn.Strategy name="password">
                        <Card className="w-full sm:w-96">
                          <CardHeader>
                            <CardTitle>Verifique seu e-mail</CardTitle>
                            <CardDescription>Insira o código de verificação enviado para o seu e-mail</CardDescription>
                            <p className="text-sm text-muted-foreground">
                              Bem-vindo de volta <SignIn.SafeIdentifier />
                            </p>
                          </CardHeader>
                          <CardContent className="grid gap-y-4">
                            <Clerk.Field name="password" className="space-y-2">
                              <Clerk.Label asChild>
                                <Label>Senha</Label>
                              </Clerk.Label>
                              <Clerk.Input type="password" asChild>
                                <Input />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <SignIn.Action submit asChild>
                                <Button disabled={isGlobalLoading}>
                                  <Clerk.Loading>
                                    {(isLoading) => {
                                      return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                    }}
                                  </Clerk.Loading>
                                </Button>
                              </SignIn.Action>
                              <SignIn.Action navigate="choose-strategy" asChild>
                                <Button size="sm" variant="link">
                                  Use outro método
                                </Button>
                              </SignIn.Action>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignIn.Strategy>

                      <SignIn.Strategy name="email_code">
                        <Card className="w-full sm:w-96">
                          <CardHeader>
                            <CardTitle>Verifique seu e-mail</CardTitle>
                            <CardDescription>Insira o código de verificação enviado para o seu e-mail</CardDescription>
                            <p className="text-sm text-muted-foreground">
                              Bem-vindo de volta <SignIn.SafeIdentifier />
                            </p>
                          </CardHeader>
                          <CardContent className="grid gap-y-4">
                            <Clerk.Field name="code" className="space-y-2">
                              <Clerk.Label className="sr-only">Código de verificação</Clerk.Label>
                              <div className="grid items-center justify-center gap-y-2">
                                <div className="flex justify-center text-center">
                                  <Clerk.Input
                                    type="otp"
                                    className="flex justify-center has-[:disabled]:opacity-50"
                                    autoSubmit
                                    render={({ value, status }) => {
                                      return (
                                        <div
                                          data-status={status}
                                          className={cn(
                                            'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                                            {
                                              'z-10 ring-2 ring-ring ring-offset-background':
                                                status === 'cursor' || status === 'selected',
                                            },
                                          )}
                                        >
                                          {value}
                                          {status === 'cursor' && (
                                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                              <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                            </div>
                                          )}
                                        </div>
                                      );
                                    }}
                                  />
                                </div>
                                <Clerk.FieldError className="block text-center text-sm text-destructive" />
                                <SignIn.Action
                                  asChild
                                  resend
                                  className="text-muted-foreground"
                                  fallback={({ resendableAfter }) => (
                                    <p className="text-sm text-muted-foreground">
                                      Não recebeu um código? Reenviar (
                                      <span className="tabular-nums">{resendableAfter}</span>)
                                    </p>
                                  )}
                                >
                                  <Button variant="link" size="sm">
                                    Não recebeu um código? Reenviar
                                  </Button>
                                </SignIn.Action>
                              </div>
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <SignIn.Action submit asChild>
                                <Button disabled={isGlobalLoading}>
                                  <Clerk.Loading>
                                    {(isLoading) => {
                                      return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                    }}
                                  </Clerk.Loading>
                                </Button>
                              </SignIn.Action>
                              <SignIn.Action navigate="choose-strategy" asChild>
                                <Button size="sm" variant="link">
                                  Use outro método
                                </Button>
                              </SignIn.Action>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignIn.Strategy>
                    </SignIn.Step>
                  </>
                )}
              </Clerk.Loading>
            </SignIn.Root>
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image 
          src="/logo.svg"
          alt="Logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}